import express from 'express';
import cors from 'cors';
// if you built shared-types, you can import types
// import { Template } from '@arka/shared-types';

const app = express();
app.use(cors());
app.use(express.json());

const mockTemplate = {
  id: 'template-1',
  title: 'Vessel Weekly Inspection',
  description: 'Basic weekly inspection',
  createdBy: 'admin-1',
  createdAt: new Date().toISOString(),
  sections: [
    {
      id: 'sec-1',
      title: 'Engine Room',
      questions: [
        { id: 'q-1', text: 'Any oil leaks?', type: 'select', options: ['No', 'Yes'], mandatory: true },
        { id: 'q-2', text: 'Notes', type: 'text', mandatory: false }
      ]
    }
  ]
};

app.get('/', (req, res) => {
  res.json({
    message: 'Arka Inspection Backend',
    status: 'running',
    availableEndpoints: [
      '/templates',
      '/inspections/sync'
    ]
  });
});

app.get('/templates', (req, res) => {
  res.json([mockTemplate]);
});

app.post('/inspections/sync', (req, res) => {
  const inspection = req.body;
  inspection.id = inspection.id || 'ins-' + Date.now();
  inspection.submittedAt = new Date().toISOString();
  inspection.status = 'pending';
  // in real app, you'd save to DB
  res.status(201).json(inspection);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Backend mock listening on http://localhost:${port}`));

