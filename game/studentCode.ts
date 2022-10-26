import CellItem from "./cellItem";
import Collision from "./collistion";
import Coordinate from "./coordinate";
import Direction from "./direction";
import { IBoardHelper, ISnake } from "./iStudentCode";

export class BoardHelper implements IBoardHelper {
    /**
     * Get the grid size
     * @returns the number of cells for the square grid's size
     */
    getGridSize(): number {
        return 10;
    }

    /**
     * Gets the millisecond frame update period. Smaller numbers will increase the speed of the game
     * @returns the millisecond refresh rate
     */
    getRefreshRateMs(): number {
        return 500;
    }

    /**
     * Create a new apple cell item, which will be displayed on the board
     * @param freeCells the cells that are currently not occupied
     * @returns the new cell item
     */
    createApple(freeCells: Coordinate[]): CellItem {
        return new CellItem(freeCells[Math.floor(Math.random() * 98)], 'red');
    }

    /**
     * Processes a keyboard event and potentially returns a direction
     * @param keyBoardEvent the event to process. See for more details: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
     * @returns the associated direction, or null if not an accepted key code
     */
    getDirection(keyBoardEvent: KeyboardEvent): Direction | null {
        console.log(keyBoardEvent.code);
        switch(keyBoardEvent.code) {
            case "KeyW":
            return Direction.UP
            case "KeyA":
            return Direction.LEFT
            case "KeyS":
            return Direction.DOWN
            case "KeyD":
            return Direction.RIGHT
        }

        return null;
    }
}

export class Snake implements ISnake {
    protected snakeHead = new CellItem(new Coordinate(5, 5), 'blue');
    protected snakeBody: CellItem[] = [];

    /**
     * @returns the Snake Head Cell Item
     */
    getSnakeHead(): CellItem {
        return this.snakeHead;
    }

    /**
     * @returns the Snake Body Cell Items (not including the Snake Head) 
     */
    getSnakeBodyParts(): CellItem[] {
        return this.snakeBody;
    }

    /**
     * @returns all the Snake Cell Items
     */
    getAllSnakeParts(): CellItem[] {
        return [this.snakeHead].concat(this.getSnakeBodyParts());
    }

    /**
     * Handles moving the snake in a certain direct
     * @param direction the diection to move the snake in
     */
    update(direction: Direction): void {
        console.log(direction)
        const snakeHeadCoordinate = this.snakeHead.coordinate;
        switch (direction) {
            case Direction.UP:
                snakeHeadCoordinate. y ++
                break;
            case Direction.LEFT:
                snakeHeadCoordinate. x --
                break;
            case Direction.DOWN:
                snakeHeadCoordinate. y --
                break; 
            case Direction.RIGHT:
                    snakeHeadCoordinate. x ++
                    break;
        }

    }

    /**
     * Detects if the snake is colliding with any obstacles or other Cell Items
     * @param gridSize the size of the grid
     * @param appleLocation the location of the apple
     * @returns the collision type or null if no collision
     */
    detectCollision(gridSize: number, appleLocation: Coordinate): Collision | null {
        return null;
    }

    /**
     * Handles the consumption of an apple, which should add a new body part
     */
    consumeApple(): void {
        
    }

}
