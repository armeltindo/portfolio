-- ============================================================
-- PORTFOLIO — Script SQL Supabase
-- Exécuter dans : Supabase Dashboard → SQL Editor
-- ============================================================

-- ── Table : projets ──────────────────────────────────────────
create table if not exists projects (
  id          bigserial primary key,
  title       text        not null,
  description text        not null,
  tags        text[]      not null default '{}',
  github_url  text,
  demo_url    text,
  image_url   text,
  featured    boolean     not null default false,
  category    text        not null default 'data-analysis'
              check (category in ('machine-learning','deep-learning','nlp','computer-vision','data-analysis')),
  created_at  timestamptz not null default now()
);

-- ── Table : messages de contact ──────────────────────────────
create table if not exists contact_messages (
  id         bigserial primary key,
  name       text        not null,
  email      text        not null,
  message    text        not null,
  read       boolean     not null default false,
  created_at timestamptz not null default now()
);

-- ── Sécurité RLS ─────────────────────────────────────────────
alter table projects          enable row level security;
alter table contact_messages  enable row level security;

-- Tout le monde peut lire les projets
create policy "projects_public_read"
  on projects for select
  using (true);

-- Tout le monde peut insérer un message
create policy "contact_public_insert"
  on contact_messages for insert
  with check (true);

-- ── Données de démo ──────────────────────────────────────────
insert into projects (title, description, tags, github_url, featured, category) values
(
  'Scoring de Fraude Douanière',
  'Application Shiny R de détection de fraude via régression logistique. Feature engineering sur 8 variables, ROC/AUC, simulateur interactif avec score 0–100.',
  array['R Shiny', 'Logit', 'ROC/AUC', 'ggplot2'],
  'https://github.com/armeltindo',
  true,
  'machine-learning'
),
(
  'Analyse Flux Commerciaux CI 2023',
  'Dashboard interactif des flux commerciaux ivoiriens. ACP, AFC, CAH, K-means, carte Leaflet, score de risque et génération de rapports automatisés.',
  array['R Shiny', 'FactoMineR', 'Leaflet', 'Plotly'],
  'https://github.com/armeltindo',
  true,
  'data-analysis'
),
(
  'Prédiction Fiscale — XGBoost',
  'Modèle ML de prédiction de recettes fiscales basé sur indicateurs macroéconomiques. Comparaison Random Forest vs XGBoost avec SHAP pour l''interprétabilité.',
  array['Python', 'XGBoost', 'SHAP', 'Scikit-learn'],
  'https://github.com/armeltindo',
  false,
  'machine-learning'
),
(
  'NLP — Analyse Sentiments Fiscaux',
  'Classification automatique de sentiments sur retours contribuables. Fine-tuning CamemBERT pour le français africain.',
  array['Python', 'HuggingFace', 'CamemBERT', 'NLP'],
  null,
  false,
  'nlp'
),
(
  'Dashboard Économique Bénin',
  'Tableau de bord Power BI de suivi des indicateurs économiques du Bénin : PIB, inflation, recettes fiscales avec actualisation automatique.',
  array['Power BI', 'DAX', 'SQL', 'API'],
  null,
  false,
  'data-analysis'
),
(
  'LSTM — Prévision PIB Afrique',
  'Réseau de neurones LSTM pour prévision du PIB à horizon 2 ans, entraîné sur données Banque Mondiale 1990–2024.',
  array['Python', 'TensorFlow', 'LSTM', 'Économétrie'],
  'https://github.com/armeltindo',
  false,
  'deep-learning'
);
