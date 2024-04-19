import React, { useState, useEffect } from 'react';

export const Counter1 = () => {
    const [counterState, setCounterState] = useState(0);

    const incrementCounter = () => {
        setCounterState(previousState => (previousState + 1) % 10);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            incrementCounter();
        }, 1000);
        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <h1>{counterState}</h1>
    );
};

export const Counter2 = () => {
    const [counterState, setCounterState] = useState(0);

    const incrementCounter = () => {
        setCounterState(previousState => (previousState + 1) % 10);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            incrementCounter();
        }, 10000);
        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <h1>{counterState}</h1>
    );
};

export const Counter3 = () => {
    const [counterState, setCounterState] = useState(0);

    const incrementCounter = () => {
        setCounterState(previousState => (previousState + 1) % 10);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            incrementCounter();
        }, 100000);
        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <h1>{counterState}</h1>
    );
};

export const Counter4 = () => {
    const [counterState, setCounterState] = useState(0);

    const incrementCounter = () => {
        setCounterState(previousState => previousState + 1);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            incrementCounter();
        }, 1000000);
        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <h1>{counterState}</h1>
    );
};

export const Counter5 = () => {
    const [counterState, setCounterState] = useState(0);

    const incrementCounter = () => {
        setCounterState(previousState => previousState + 1);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            incrementCounter();
        }, 10000000);
        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <h1>{counterState}</h1>
    );
};

