import React from 'react'
import { AppProvider, useApp } from './context/AppContext'
import { Sidebar } from './components/Sidebar'
import { FamilyForm } from './components/FamilyForm'
import { MemberProfile } from './components/MemberProfile'
import { RecommendationCard } from './components/RecommendationCard'

const MainContent = () => {
  const { view } = useApp();

  return (
    <div className="ml-[32%] min-h-screen bg-background">
      <div className="p-8">
        {view === 'SETUP' && <FamilyForm />}
        {view === 'PROFILE' && <MemberProfile />}
        {view === 'RECOMMENDATION' && <RecommendationCard />}
      </div>
    </div>
  )
}

function App() {
  return (
    <AppProvider>
      <div className="flex bg-background min-h-screen text-text-main font-sans">
        <Sidebar />
        <MainContent />
      </div>
    </AppProvider>
  )
}

export default App
