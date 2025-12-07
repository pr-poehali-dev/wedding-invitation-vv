CREATE TABLE rsvp_responses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    attendance VARCHAR(10) NOT NULL CHECK (attendance IN ('yes', 'no')),
    guests INTEGER,
    email VARCHAR(255),
    phone VARCHAR(50),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_attendance ON rsvp_responses(attendance);
CREATE INDEX idx_created_at ON rsvp_responses(created_at);
