interface QuestionResult {
  id: string;
  text: string;
}

const results: QuestionResult[] = [
  {
    id: "q1",
    text: "......... % са отговорили на този въпрос по един начин.",
  },
  {
    id: "q2",
    text: "......... % са отговорили на този въпрос по друг начин.",
  },
  { id: "q3", text: "......... % са дали трети отговор на въпроса." },
  { id: "q4", text: "......... % са отговорили нещо съвсем различно." },
  { id: "q5", text: "......... % са пропуснали да отговорят." },
  { id: "q6", text: "......... % са посочили опция А." },
  { id: "q7", text: "......... % са посочили опция Б." },
];

const ResultsDisplay: React.FC<{
  className?: string;
}> = ({}) => {
  return (
    <div className="border-primary mx-8 flex flex-row gap-4 gap-7 space-y-1 rounded-b-xl border-2">
      <div className="flex-grow p-3">
        <div className="custom-scrollbar flex grid h-40 grid-cols-3 flex-row gap-7 space-y-2 overflow-y-auto pr-2">
          <div>
            {results.map((result, index) => (
              <div key={result.id}>
                <p className="text-md text-gray-950">Въпрос: {index + 1}</p>
                <p className="border-b border-dotted border-gray-400 pb-1 text-xs text-gray-950">
                  {result.text}
                </p>
              </div>
            ))}
          </div>
          <div>
            {results.map((result, index) => (
              <div key={result.id}>
                <p className="text-md text-gray-950">Въпрос: {index + 1}</p>
                <p className="border-b border-dotted border-gray-400 pb-1 text-xs text-gray-950">
                  {result.text}
                </p>
              </div>
            ))}
          </div>
          <div>
            {results.map((result, index) => (
              <div key={result.id}>
                <p className="text-md text-gray-950">Въпрос: {index + 1}</p>
                <p className="border-b border-dotted border-gray-400 pb-1 text-xs text-gray-950">
                  {result.text}
                </p>
              </div>
            ))}
          </div>
          {results.length === 0 && (
            <p className="text-xs text-gray-500">Няма налични резултати.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
