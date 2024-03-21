import { writable } from 'svelte/store';

const PollStore = writable([
    {
        id: 1,
        question: 'What is your favorite programming language?',
        answerA: 'Python',
        answerB: 'JavaScript',
        votesA: 12,
        votesB: 10
    },
]);

export default PollStore;