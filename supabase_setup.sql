-- ============================================================
-- PORTFOLIO TINDO ARMEL — Script SQL Supabase
-- Exécuter dans : Supabase Dashboard → SQL Editor
-- Version : 2.0 — Refonte complète
-- ============================================================

-- ── Table : projets ──────────────────────────────────────────
create table if not exists projects (
  id           bigserial primary key,
  title        text        not null,
  description  text        not null,
  tags         text[]      not null default '{}',
  github_url   text,
  demo_url     text,
  image_url    text,
  featured     boolean     not null default false,
  category     text        not null default 'data-analysis'
               check (category in ('machine-learning','deep-learning','nlp','computer-vision','data-analysis')),
  metric       text,
  metric_color text        default 'primary'
               check (metric_color in ('primary','gold','teal')),
  created_at   timestamptz not null default now()
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

-- ── Table : témoignages ───────────────────────────────────────
create table if not exists testimonials (
  id         bigserial primary key,
  name       text        not null,
  role       text        not null,
  company    text        not null,
  content    text        not null,
  avatar_url text,
  rating     integer     not null default 5
             check (rating between 1 and 5),
  featured   boolean     not null default true,
  created_at timestamptz not null default now()
);

-- ── Row Level Security ────────────────────────────────────────
alter table projects       enable row level security;
alter table contact_messages enable row level security;
alter table testimonials   enable row level security;

-- Lecture publique des projets
create policy "projects_public_read"
  on projects for select using (true);

-- Lecture publique des témoignages
create policy "testimonials_public_read"
  on testimonials for select using (true);

-- Insertion publique des messages de contact
create policy "contact_public_insert"
  on contact_messages for insert with check (true);

-- ── Données projets ───────────────────────────────────────────
insert into projects (title, description, tags, github_url, featured, category, metric, metric_color) values
(
  'Scoring de Fraude Douanière',
  'Système complet de détection de fraude à l''importation pour la DGID Bénin. Random Forest + XGBoost avec interface R Shiny interactive, feature engineering sur 12 variables, ROC/AUC 0.94 et simulateur de score 0–100 en temps réel.',
  array['R Shiny', 'XGBoost', 'Random Forest', 'ROC/AUC'],
  'https://github.com/armeltindo',
  true,
  'machine-learning',
  'F1-score: 0.89',
  'primary'
),
(
  'Analyse Flux Commerciaux CEDEAO',
  'Dashboard R Shiny d''analyse multidimensionnelle des échanges commerciaux entre les 15 pays de la CEDEAO. ACP, AFC, clustering K-means, carte Leaflet interactive et génération automatique de rapports PDF.',
  array['R Shiny', 'FactoMineR', 'K-means', 'Leaflet'],
  'https://github.com/armeltindo',
  true,
  'data-analysis',
  '15 pays analysés',
  'gold'
),
(
  'Prévision PIB — Afrique de l''Ouest',
  'Modèle LSTM pour la prévision du PIB de 8 pays d''Afrique de l''Ouest à horizon 5 ans. Données Banque Mondiale 1990–2024, TensorFlow, RMSE 2.1% sur le jeu de test.',
  array['Python', 'TensorFlow', 'LSTM', 'Time Series'],
  'https://github.com/armeltindo',
  false,
  'deep-learning',
  'RMSE: 2.1%',
  'primary'
),
(
  'NLP — Sentiment Politique Francophone',
  'Fine-tuning de CamemBERT pour l''analyse de sentiment des discours politiques africains francophones. Corpus 50k tweets, accuracy 91%, déployé via FastAPI.',
  array['Python', 'CamemBERT', 'HuggingFace', 'FastAPI'],
  null,
  false,
  'nlp',
  'Accuracy: 91%',
  'teal'
),
(
  'Dashboard Indicateurs Bénin 2050',
  'Tableau de bord Power BI de suivi des 17 ODD au Bénin. 120+ indicateurs, actualisation automatique via API Banque Mondiale, accessible à la présidence.',
  array['Power BI', 'DAX', 'Python', 'API REST'],
  null,
  false,
  'data-analysis',
  '120+ KPIs',
  'gold'
),
(
  'AgriSense — Recommandation AgriTech',
  'Système de recommandation de pratiques agricoles pour les petits agriculteurs béninois. Basé sur données météo, sol et marché via Random Forest. Interface web Next.js + API FastAPI.',
  array['Python', 'Scikit-learn', 'FastAPI', 'Next.js'],
  'https://github.com/armeltindo',
  false,
  'machine-learning',
  '94% satisfaction',
  'primary'
);

-- ── Données témoignages ───────────────────────────────────────
insert into testimonials (name, role, company, content, rating) values
(
  'Dr. Émeka Okafor',
  'Directeur de Recherche & Programmes',
  'ENSEA — Abidjan',
  'Armel a démontré une maîtrise remarquable des méthodes économétriques avancées dans le cadre du programme Datafid2. Sa capacité à combiner rigueur statistique et vision stratégique, tout en l''ancrant dans les réalités africaines, en fait un profil exceptionnel. Ses travaux sur le scoring de fraude douanière ont impressionné l''ensemble du corps enseignant.',
  5
),
(
  'Mme Régine Ahouansou',
  'Chef de Service Informatique & SI',
  'DGID — Cotonou, Bénin',
  'Le système de scoring développé par Armel a transformé notre approche du contrôle fiscal. Son modèle détecte 89% des anomalies avec une précision remarquable et a significativement amélioré notre efficacité opérationnelle. Au-delà des compétences techniques, Armel sait vulgariser des concepts complexes pour les équipes non techniques.',
  5
),
(
  'Prof. Jean-Baptiste Mensah',
  'Professeur de Statistiques',
  'Université d''Abomey-Calavi',
  'Étudiant brillant et chercheur rigoureux. Armel possède cette rare capacité à maîtriser à la fois les fondements théoriques et les applications pratiques de la statistique. Son mémoire de master sur la modélisation du risque fiscal au Bénin est d''une qualité qui honore notre faculté. Un talent prometteur pour la data science africaine.',
  5
);
