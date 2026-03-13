import type { Project } from '@/lib/supabase'

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Scoring de Fraude Fiscale — DGID Bénin',
    description:
      "Système ML de détection de fraude à l'importation pour la DGID Bénin. XGBoost + SHAP pour l'interprétabilité des décisions auprès des inspecteurs. Feature engineering sur 15+ variables déclaratives, déployé en production via FastAPI, dashboard Power BI temps réel.",
    tags: ['Python', 'XGBoost', 'SHAP', 'FastAPI', 'Power BI'],
    github_url: 'https://github.com/armeltindo',
    featured: true,
    category: 'machine-learning',
    created_at: '2024-06-01',
    metric: '89% précision',
    metric_color: 'primary',
  },
  {
    id: 2,
    title: 'FiscoBot Bénin — Assistant RAG Fiscal',
    description:
      "Chatbot intelligent pour contribuables béninois basé sur RAG (Retrieval-Augmented Generation). Indexation du Code Général des Impôts du Bénin via pgvector dans Supabase. Réponses contextuelles sur le droit fiscal béninois en langage naturel, sans hallucination.",
    tags: ['Next.js', 'Supabase', 'pgvector', 'OpenAI', 'RAG'],
    github_url: 'https://github.com/armeltindo',
    featured: true,
    category: 'nlp',
    created_at: '2025-09-01',
    metric: 'RAG en production',
    metric_color: 'teal',
  },
  {
    id: 3,
    title: 'Modélisation du Risque Fiscal — Mémoire ENSEA',
    description:
      "Mémoire de fin d'études ENSEA — modèle hybride économétrie + ML pour l'évaluation du risque fiscal des entreprises. Comparaison Probit, Logit et Random Forest sur données fiscales réelles. Mémoire distingué, top promotion Master Statistique & Économétrie 2023.",
    tags: ['R', 'Stata', 'ggplot2', 'Économétrie', 'Random Forest'],
    github_url: 'https://github.com/armeltindo',
    featured: false,
    category: 'machine-learning',
    created_at: '2023-06-01',
    metric: 'Top promotion 2023',
    metric_color: 'gold',
  },
  {
    id: 4,
    title: 'Analyse Flux Commerciaux CEDEAO',
    description:
      "Dashboard R Shiny d'analyse multidimensionnelle des échanges commerciaux entre les 15 pays de la CEDEAO. ACP, AFC, clustering K-means, carte Leaflet interactive et génération automatique de rapports PDF pour décideurs régionaux.",
    tags: ['R Shiny', 'FactoMineR', 'K-means', 'Leaflet'],
    github_url: 'https://github.com/armeltindo',
    featured: false,
    category: 'data-analysis',
    created_at: '2026-01-15',
    metric: '15 pays analysés',
    metric_color: 'gold',
  },
  {
    id: 5,
    title: 'Prévision PIB — Afrique de l\'Ouest (LSTM)',
    description:
      "Modèle LSTM pour la prévision du PIB de 8 pays d'Afrique de l'Ouest à horizon 5 ans. Données Banque Mondiale 1990–2024, TensorFlow. RMSE 2.1% sur le jeu de test, visualisation des intervalles de confiance.",
    tags: ['Python', 'TensorFlow', 'LSTM', 'Time Series'],
    github_url: 'https://github.com/armeltindo',
    featured: false,
    category: 'deep-learning',
    created_at: '2025-11-01',
    metric: 'RMSE: 2.1%',
    metric_color: 'primary',
  },
  {
    id: 6,
    title: 'NLP — Sentiment Politique Francophone',
    description:
      "Fine-tuning de CamemBERT pour l'analyse de sentiment des discours politiques africains francophones. Corpus 50k tweets, accuracy 91%, déployé via FastAPI. Premier modèle NLP dédié au discours politique ouest-africain francophone.",
    tags: ['Python', 'CamemBERT', 'HuggingFace', 'FastAPI'],
    github_url: 'https://github.com/armeltindo',
    featured: false,
    category: 'nlp',
    created_at: '2025-08-01',
    metric: 'Accuracy: 91%',
    metric_color: 'teal',
  },
]
