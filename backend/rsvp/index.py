import json
import os
from typing import Dict, Any
from pydantic import BaseModel, Field, field_validator
import psycopg2
from psycopg2.extras import RealDictCursor

class RSVPRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=255)
    attendance: str = Field(..., pattern='^(yes|no)$')
    guests: int = Field(default=1, ge=1, le=10)
    email: str = Field(default='', max_length=255)
    phone: str = Field(default='', max_length=50)
    message: str = Field(default='')

    @field_validator('name')
    @classmethod
    def name_not_empty(cls, v: str) -> str:
        if not v.strip():
            raise ValueError('Name cannot be empty')
        return v.strip()

def get_db_connection():
    return psycopg2.connect(os.environ['DATABASE_URL'])

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Обработка RSVP ответов гостей на свадьбу
    Args: event - dict с httpMethod, body, queryStringParameters
          context - объект с request_id, function_name и другими атрибутами
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        rsvp = RSVPRequest(**body_data)
        
        conn = get_db_connection()
        try:
            with conn.cursor() as cur:
                cur.execute(
                    "INSERT INTO rsvp_responses (name, attendance, guests, email, phone, message) "
                    "VALUES (%s, %s, %s, %s, %s, %s) RETURNING id",
                    (rsvp.name, rsvp.attendance, rsvp.guests, rsvp.email, rsvp.phone, rsvp.message)
                )
                response_id = cur.fetchone()[0]
                conn.commit()
            
            return {
                'statusCode': 201,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': True,
                    'id': response_id,
                    'message': 'RSVP принят'
                }),
                'isBase64Encoded': False
            }
        finally:
            conn.close()
    
    if method == 'GET':
        conn = get_db_connection()
        try:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute(
                    "SELECT id, name, attendance, guests, email, phone, message, created_at "
                    "FROM rsvp_responses ORDER BY created_at DESC"
                )
                responses = cur.fetchall()
                
                for response in responses:
                    if response['created_at']:
                        response['created_at'] = response['created_at'].isoformat()
            
            attending_count = sum(r['guests'] for r in responses if r['attendance'] == 'yes')
            not_attending_count = len([r for r in responses if r['attendance'] == 'no'])
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'responses': responses,
                    'stats': {
                        'total_responses': len(responses),
                        'attending': attending_count,
                        'not_attending': not_attending_count
                    }
                }),
                'isBase64Encoded': False
            }
        finally:
            conn.close()
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Method not allowed'}),
        'isBase64Encoded': False
    }
