import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="app-container container py-5">
      <header className="mb-4 text-center">
        <h1>OctoFit Tracker</h1>
        <p className="lead">Modern multi-tier fitness tracking with React, Vite, and MongoDB.</p>
      </header>

      <div className="card shadow-sm">
        <div className="card-body">
          <h2>Ready to build</h2>
          <p>
            Frontend running on port <strong>5173</strong> and consuming the backend API on port <strong>8000</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
