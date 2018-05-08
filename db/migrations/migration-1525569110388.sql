CREATE TABLE IF NOT EXISTS articles (
  id BIGSERIAL PRIMARY KEY,
  section VARCHAR(255),
  title VARCHAR(255),
  abstract VARCHAR(255),
  url VARCHAR(255),
  published VARCHAR(255),
  byline VARCHAR(255),
  thoughts VARCHAR(255)
);
