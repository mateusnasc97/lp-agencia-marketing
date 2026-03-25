"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { performanceData } from '@/data/dashboardData';

export default function MainChart() {
  return (
    <div className="h-[400px] w-full bg-slate-900/50 p-6 rounded-3xl border border-white/5">
      <h3 className="text-lg font-bold mb-6 text-white">Crescimento de Retorno (ROAS)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={performanceData}>
          <defs>
            <linearGradient id="colorRetorno" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#94a3b8', fontSize: 12}} 
            dy={10}
          />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff10', borderRadius: '12px' }}
            itemStyle={{ color: '#f59e0b' }}
          />
          <Area 
            type="monotone" 
            dataKey="retorno" 
            stroke="#f59e0b" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorRetorno)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}