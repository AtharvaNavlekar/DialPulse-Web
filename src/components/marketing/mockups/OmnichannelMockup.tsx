import { Phone, MessageSquare, Mail, MoreVertical, Search, CheckCheck, Smile, Shield } from 'lucide-react';

export function OmnichannelMockup() {
  return (
    <div className="w-full h-full max-h-[550px] bg-white rounded-2xl md:rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,105,92,0.12)] border border-slate-200 flex flex-col md:flex-row overflow-hidden text-left relative z-10">
      
      {/* Inbox List */}
      <div className="w-full md:w-5/12 lg:w-4/12 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50/70 flex flex-col">
        <div className="p-3.5 border-b border-slate-200 bg-white">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs focus:outline-none focus:border-teal-500 transition-all placeholder:text-slate-400 text-slate-800"
              readOnly
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
          {[
            { name: 'Michael Chang', msg: 'That sounds perfect. Can we schedule...', time: '10:42 AM', active: true, channel: MessageSquare, unread: 0 },
            { name: 'Sarah Connor', msg: 'Incoming Call (Connected 4m 12s)', time: '09:15 AM', active: false, channel: Phone, unread: 1 },
            { name: 'David Lee', msg: 'Re: Enterprise Agreement review', time: 'Yesterday', active: false, channel: Mail, unread: 0 },
            { name: 'Emma Davis', msg: 'Yes, please send over the details.', time: 'Tuesday', active: false, channel: MessageSquare, unread: 0 },
          ].map((chat, i) => (
            <div key={i} className={`p-3.5 cursor-pointer flex gap-3 transition-colors ${chat.active ? 'bg-white shadow-[inset_3px_0_0_#00695C]' : 'hover:bg-white/80'}`}>
              <div className="w-9 h-9 rounded-full bg-teal-50 text-[#00695C] border border-teal-200 flex items-center justify-center shrink-0 font-bold text-xs relative">
                {chat.name.charAt(0)}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-2xs">
                   <chat.channel className={`w-2.5 h-2.5 ${chat.active ? 'text-[#00695C]' : 'text-slate-400'}`} />
                </div>
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex justify-between items-center mb-0.5">
                  <span className={`text-xs font-bold truncate ${chat.active ? 'text-slate-900' : 'text-slate-700'}`}>{chat.name}</span>
                  <span className={`text-[10px] ${chat.unread ? 'text-[#00695C] font-bold' : 'text-slate-400'}`}>{chat.time}</span>
                </div>
                <div className={`text-[11px] truncate ${chat.unread ? 'text-slate-900 font-bold' : 'text-slate-500 font-normal'}`}>
                  {chat.msg}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white relative">
        {/* Chat Header */}
        <div className="h-14 border-b border-slate-200 px-5 flex items-center justify-between bg-white relative z-10">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-teal-100 text-[#00695C] flex items-center justify-center font-bold text-xs">
                MC
             </div>
             <div>
               <div className="text-xs md:text-sm font-bold text-slate-900">Michael Chang</div>
               <div className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                 Online • via Verified SMS
               </div>
             </div>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#00695C] hover:border-teal-200 hover:bg-teal-50 cursor-pointer transition-all">
               <Phone className="w-3.5 h-3.5" />
             </div>
             <MoreVertical className="w-4 h-4 text-slate-400 cursor-pointer" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 md:p-5 overflow-y-auto flex flex-col gap-4 relative z-10 bg-slate-50/30">
          <div className="text-center text-[10px] font-mono font-bold text-slate-400">TODAY 09:30 AM</div>
          
          <div className="flex justify-end">
            <div className="max-w-[80%] bg-[#00695C] text-white rounded-2xl rounded-tr-xs px-4 py-2.5 text-xs shadow-2xs">
              Hi Michael, following up on our demo yesterday. Did you have a chance to review the enterprise proposal?
              <div className="flex items-center justify-end gap-1 mt-1 opacity-80 text-[10px]">
                <span>09:32 AM</span>
                <CheckCheck className="w-3 h-3" />
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[80%] bg-white text-slate-800 rounded-2xl rounded-tl-xs px-4 py-2.5 text-xs shadow-2xs border border-slate-200">
              Yes, we went through it this morning. The team is really impressed with the native compliance engine.
              <div className="flex items-center justify-start gap-1 mt-1 text-slate-400 text-[10px]">
                <span>10:41 AM</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-start">
            <div className="max-w-[80%] bg-white text-slate-800 rounded-2xl rounded-tl-xs px-4 py-2.5 text-xs shadow-2xs border border-slate-200">
              That sounds perfect. Can we schedule a technical deep dive with our engineering lead next Tuesday?
              <div className="flex items-center justify-start gap-1 mt-1 text-slate-400 text-[10px]">
                <span>10:42 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-3.5 bg-white border-t border-slate-200 relative z-10">
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-1.5 pr-2 focus-within:border-teal-500 transition-all">
            <div className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-[#00695C] cursor-pointer">
              <Smile className="w-4 h-4" />
            </div>
            <input 
              type="text" 
              placeholder="Type an SMS or WhatsApp message..." 
              className="flex-1 bg-transparent text-xs focus:outline-none placeholder:text-slate-400 text-slate-800"
              readOnly
            />
            <div className="px-3 py-1.5 bg-[#00695C] text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-[#004D40] transition-colors shadow-2xs">
              Send
            </div>
          </div>
          <div className="flex justify-between items-center mt-2 px-1 text-[10px]">
             <span className="text-slate-400">140 chars remaining</span>
             <div className="font-bold text-emerald-700 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
               <Shield className="w-3 h-3 text-emerald-600" />
               <span>DNC Check Passed</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
