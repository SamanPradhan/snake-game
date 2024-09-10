import {useState, useEffect } from 'react';

interface Point {
    x: number;
    y: number;
}

const initialSnake: Point[] = [{ x: 10, y: 10 }];
const initialFood: Point = { x: 15, y: 15 };
const gridSize = 20;

export default function useSnakeGame() {
    const [snake, setSnake ] = useState<Point[]>(initialSnake);
    const [food, setFood] = useState<Point>(initialFood);
    const [direction, setDirection] = useState<Point>({ x: 0, y: 0 });
    const [gameOver, setGameOver] = useState(false);


}