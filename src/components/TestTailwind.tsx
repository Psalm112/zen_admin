export default function TestTailwind() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Tailwind CSS Test</h1>
        <p className="text-gray-600">
          If this text is styled and the background is white, Tailwind CSS is working!
        </p>
        <div className="mt-4 p-4 bg-blue-100 text-blue-800 rounded">
          This is a blue info box with rounded corners.
        </div>
      </div>
    </div>
  );
}
