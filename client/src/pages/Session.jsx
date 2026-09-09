import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { dummySessions } from '../assets/asset';
import EmptySessions from '../components/Sessions/EmptySessions';
import SessionCard from '../components/Sessions/SessionCard';
import SessionDetailModal from '../components/Sessions/SessionDetailModal';
const Session = () => {

  const [sessions] = useState(dummySessions)
  const [selectedSession, setSelectedSession] = useState(null)
  const navigate = useNavigate()

  const openSessionDetail = (sessionId) => {
    const session = sessions.find((s)=>s.id === sessionId || s.meetingId === sessionId)
    if(session){
      setSelectedSession(session);
    }
  }

  return (
    <main className='flex-1 max-w-7xl w-full mx-auto p-6 md:p-12'>
      {/* Page Title & Navigation Header */}
      <Link to="/dashboard" className='flex items-center text-sm gap-1 mb-4 text-slate-500 hover:text-slatee-900 transition-colors'>
        <ArrowLeftIcon size={14} /> Go to Dashboard
      </Link>

      <div>
        <h1 className='text-3xl font-medium tracking-tight text-slate-900'>Meeting Sessions.</h1>
        <p className='text-sm text-slate-500 mt-2'>Review your past and active meeting history, participant logs, and chat transcripts.</p>
      </div>

      {/* Session Grid / Empty State */}
      {
        sessions.length ===0?(
          <EmptySessions />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {sessions.map((session)=>(
              <SessionCard
              key={sessions.id}
              session={session}
              onOpenDetails={openSessionDetail}
              onRejoin={(meetingId)=>navigate(`/meeting/${meetingId}`)}/>
            ))}
          </div>
        )
      }


      {/* Session Detail Modal */}
      <SessionDetailModal session={selectedSession} onClose={()=> setSelectedSession(null)}/>
    </main>
  )
}

export default Session