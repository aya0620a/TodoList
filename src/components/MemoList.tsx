import React, { useState, useEffect } from 'react';
import  supabase  from '../supabaseClient';

type Memo = {
  index: number;
  text: string;
  time: string;
};

type MemoListProps = {
  memos: Memo[];
  setMemos: React.Dispatch<React.SetStateAction<Memo[]>>;
};


const MemoList: React.FC<MemoListProps> = ({memos, setMemos}) => {

  useEffect(() => {
    fetchMemos();
  }, []);

  const fetchMemos = async () => {
    const { data, error } = await supabase.from('memos').select('*');
    if (error) {
      console.error('Error fetching memos:', error);
    } else {
      setMemos(data.map(memo => memo.text)); // memosはstring[]型なので、取得したデータからtextプロパティだけを抽出します
    }
  };

  return (
    <div className="mt-10 flex justify-center min-h-screen">
      <div className="w-1/2"> {/* このdiv要素を追加し、その中にmemosをマップします */}
        {memos.map((memo, index) => (
          <div key={index} className="mb-4 bg-blue-100 p-2 rounded shadow">
            <p className="text-lg font-bold">{memo.text} 　　　更新時刻{memo.time}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoList;