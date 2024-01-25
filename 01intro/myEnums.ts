//by default the values of the enum member starts from 0 and next value has incremented values

enum SeatChoice{
    AISLE,
    MIDDLE,
    WINDOW
}

enum newSeatChoice{
    AISLE = 10,
    MIDDLE,
    WINDOW
}

const seat = SeatChoice.WINDOW;

export {}