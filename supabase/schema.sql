-- Script de creación para la tabla de leads del quiz
CREATE TABLE IF NOT EXISTS "designer_quiz_leads" (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  archetype TEXT NOT NULL
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE "designer_quiz_leads" ENABLE ROW LEVEL SECURITY;

-- Políticas para permitir inserción y actualización anónima (necesario para el flujo del quiz)
CREATE POLICY "Allow anonymous insert on quiz leads" ON "designer_quiz_leads"
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow anonymous update on quiz leads" ON "designer_quiz_leads"
  FOR UPDATE
  USING (true);

-- Comentario para documentación
COMMENT ON TABLE "designer_quiz_leads" IS 'Leads capturados a través del quiz de personalidad de diseñadora';
