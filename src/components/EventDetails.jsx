import {
    CalendarDays,
    Clock,
    MapPin,
    Phone,
    ExternalLink,
    Download,
  } from "lucide-react";
  
  const MAP_URL = "https://maps.app.goo.gl/UCQsAccTjWtE1PW38";
  
  function downloadCalendar() {
    const calendar = `BEGIN:VCALENDAR
  VERSION:2.0
  PRODID:-//Thiyesh Birthday//EN
  BEGIN:VEVENT
  UID:thiyesh-first-birthday-20270102
  DTSTAMP:20261120T000000Z
  DTSTART:20270102T150000
  DTEND:20270102T190000
  SUMMARY:Thiyesh's 1st Birthday
  DESCRIPTION:Join us to celebrate Thiyesh's first birthday!
  LOCATION:Birthday Celebration Venue
  URL:${MAP_URL}
  END:VEVENT
  END:VCALENDAR`;
  
    const blob = new Blob([calendar], {
      type: "text/calendar;charset=utf-8",
    });
  
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
  
    link.href = url;
    link.download = "Thiyesh-1st-Birthday.ics";
    link.click();
  
    URL.revokeObjectURL(url);
  }
  
  export default function EventDetails() {
    const details = [
      {
        icon: CalendarDays,
        title: "Celebration",
        value: "Thiyesh's 1st Birthday",
      },
      {
        icon: CalendarDays,
        title: "Date",
        value: "Saturday, January 2, 2027",
      },
      {
        icon: Clock,
        title: "Time",
        value: "3:00 PM – 7:00 PM",
      },
    ];
  
    return (
      <section id="details" className="max-w-4xl mx-auto px-4 py-12">
  
        <div className="text-center mb-8">
          <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">
            The Special Day
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Event Details
          </h2>
          <p className="text-gray-500 mt-2">
            We'd love to celebrate this special moment with you.
          </p>
        </div>
  
        <div className="grid sm:grid-cols-2 gap-4">
  
          {details.map(({ icon: Icon, title, value }) => (
            <div key={title} className="card p-5 flex gap-4 items-center">
              <div className="bg-[#EAF0E6] p-3 rounded-xl text-[#7C9473]">
                <Icon size={25} />
              </div>
  
              <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="font-bold">{value}</p>
              </div>
            </div>
          ))}
  
          <div className="card p-5 flex gap-4 items-center sm:col-span-2">
            <div className="bg-[#FCEBDD] p-3 rounded-xl text-[#D99869]">
              <MapPin size={25} />
            </div>
  
            <div className="flex-1">
              <p className="text-sm text-gray-500">Venue / Location</p>
              <p className="font-bold">Birthday Celebration Venue</p>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#7C9473] font-bold inline-flex gap-2 items-center mt-2"
              >
                Open in Google Maps <ExternalLink size={15} />
              </a>
            </div>
          </div>
  
        </div>
  
        <div className="card p-5 mt-4">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="text-[#7C9473]" />
            <h3 className="font-bold text-lg">Contact the Hosts</h3>
          </div>
  
          <div className="flex flex-wrap gap-3">
            {["0772546480", "0773255033"].map((number) => (
              <a
                key={number}
                href={`tel:+960${number.slice(1)}`}
                className="btn-primary rounded-full px-5 py-3 text-sm font-bold"
              >
                <Phone size={15} className="inline mr-2" />
                {number}
              </a>
            ))}
          </div>
        </div>
  
        {/* <div className="text-center mt-6">
          <button
            onClick={downloadCalendar}
            className="inline-flex items-center gap-2 border-2 border-[#7C9473] text-[#7C9473] px-6 py-3 rounded-full font-bold hover:bg-[#7C9473] hover:text-white transition"
          >
            <Download size={18} />
            Add to Calendar
          </button>
        </div> */}
  
      </section>
    );
  }