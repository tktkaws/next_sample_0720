import Link from 'next/link';

const Hobby = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="mt-20 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">My Hobby</h2>
        <p className="text-gray-600">お笑い</p>
        <p className="text-gray-600">HIPHOP</p>
      </div>
      <Link href="/" className="mt-20">Homeへ</Link>
    </div>
  );
}

export default Hobby;