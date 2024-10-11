import SectionLayout from '@_component/Layout';
import './timeline.css';

const TimeLine = () => {
  return (
    <SectionLayout>
      <article className="p-4 mb-4 max-w-7xl w-full rounded-xl bg-slate-100">
        <h2 className="font-bold text-lg">타임라인</h2>
        <div className="mt-4 py-2 px-4 h-[500px] w-full border-4 border-green-300 rounded-lg overflow-x-scroll">
          <ul className="flex justify-between items-center relative min-w-[800px] w-full h-full">
            {TIME_TABLE.map(num => {
              return (
                <li key={num} className="flex flex-col items-center h-full">
                  <div className="mb-2 font-semibold">{num}</div>
                  <Line />
                </li>
              );
            })}
            <div className="absolute top-11 px-2 min-w-[800px] w-full h-[400px]">
              <div className="flex flex-col gap-3 w-full h-full overflow-scroll scrollbar-hide">
                {TIMELINE_DATE.map(
                  ({ id, name, people, startTime, endTime, status }) => {
                    const start = TIME_TABLE.indexOf(startTime) + 1;
                    const end = TIME_TABLE.indexOf(endTime) + 1;

                    return (
                      <div className="grid grid-cols-8 w-full" key={id}>
                        <div
                          className={`start_${start} end_${end} p-1 rounded text-xs ${status}`}
                        >
                          {`${name} ( ${people}명 )`}
                        </div>
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </ul>
        </div>
      </article>
      <article className="p-4 max-w-7xl w-full rounded-xl bg-slate-100">
        <h2 className="font-bold text-lg">리스트</h2>
      </article>
    </SectionLayout>
  );
};

export default TimeLine;

const Line = () => {
  return <span className="h-full border-[1px] border-gray-200" />;
};

const TIME_TABLE = ['10', '11', '12', '13', '14', '15', '16', '17', '18'];

const TIMELINE_DATE = [
  {
    id: 1,
    people: 3,
    startTime: '10',
    endTime: '14',
    status: 'confirm',
    name: '김명성',
  },
  {
    id: 2,
    people: 3,
    startTime: '12',
    endTime: '13',
    status: 'confirm',
    name: '김명성',
  },
  {
    id: 3,
    people: 2,
    startTime: '15',
    endTime: '18',
    status: 'yet',
    name: '김명성',
  },
  {
    id: 4,
    people: 6,
    startTime: '11',
    endTime: '13',
    status: 'done',
    name: '김명성',
  },
  {
    id: 5,
    people: 3,
    startTime: '14',
    endTime: '17',
    status: 'done',
    name: '김명성',
  },
];
