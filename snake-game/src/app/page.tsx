import Image from "next/image";

export default function Home() {
  const {snake, food, gameOver, gridSize, resetGame } = 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Snake Game</h1>
      
    </div>
  );
}
