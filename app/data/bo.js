const BO = [{
    value: 1,
    label: '1',
    isSelected: false,
    modes: [{
        value: 1,
        label: 'Ban / Ban / Ban / Random',
        isSelected: true,
        requiredVotes: [
            { id: 1, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 3, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 4, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 5, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 6, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 7, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false }
        ]
    }, {
        value: 2,
        label: 'Ban / Ban / Random',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 3, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 4, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 5, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false }
        ]
    }, {
        value: 3,
        label: 'Ban / Random',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 3, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false }
        ]
    }, {
        value: 4,
        label: 'All Random',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: true }
        ]
    }]
}, {
    value: 2,
    label: '2',
    isSelected: false,
    modes: [{
        value: 1,
        label: 'Ban / Pick',
        isSelected: true,
        requiredVotes: [
            { id: 1, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 3, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 4, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false }
        ]
    }, {
        value: 2,
        label: 'Ban / Random',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 3, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false },
            { id: 4, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false }
        ]
    }, {
        value: 3,
        label: 'All Pick',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'pick', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'pick', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false }
        ]
    }, {
        value: 4,
        label: 'All Random',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: true },
            { id: 2, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false }
        ]
    }, {
        value: 5,
        label: 'Ban / Ban / Pick',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 3, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 4, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 5, type: 'pick', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 6, type: 'pick', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false }
        ]
    }]
}, {
    value: 3,
    label: '3',
    isSelected: true,
    modes: [{
        value: 1,
        label: 'Ban / Pick / Ban / Random',
        isSelected: true,
        requiredVotes: [
            { id: 1, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 3, type: 'pick', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 4, type: 'pick', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 5, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 6, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 7, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false }
        ]
    }, {
        value: 2,
        label: 'Ban / Ban / Pick / Random',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 3, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 4, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 5, type: 'pick', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 6, type: 'pick', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 7, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false }
        ]
    }, {
        value: 3,
        label: 'Ban / Pick / Random',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 3, type: 'pick', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 4, type: 'pick', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 5, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false }
        ]
    }, {
        value: 4,
        label: 'Ban / Ban / Random',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 3, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 4, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 5, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false }
        ]
    }, {
        value: 5,
        label: 'Pick / Random',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'pick', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'pick', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 3, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false }
        ]
    }, {
        value: 6,
        label: 'All Random',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: true },
            { id: 2, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false },
            { id: 3, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false }
        ]
    }]
}, {
    value: 5,
    label: '5',
    isSelected: true,
    modes: [{
        value: 1,
        label: 'Ban / Pick / Pick / Random',
        isSelected: true,
        requiredVotes: [
            { id: 1, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 3, type: 'pick', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 4, type: 'pick', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 5, type: 'pick', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 6, type: 'pick', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 7, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false }
        ]
    }, {
        value: 2,
        label: 'Pick / Ban / Pick / Random',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'pick', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'pick', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 3, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 4, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 5, type: 'pick', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 6, type: 'pick', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 7, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false }
        ]
    }, {
        value: 3,
        label: 'Pick / Pick / Ban / Random',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'pick', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'pick', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 3, type: 'pick', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 4, type: 'pick', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 5, type: 'ban', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 6, type: 'ban', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 7, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false }
        ]
    }, {
        value: 4,
        label: 'Pick / Pick / Random',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'pick', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'pick', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 3, type: 'pick', status: 'waiting', teamNumber: 1, teamName: 'Team 1', isCurrentVote: false },
            { id: 4, type: 'pick', status: 'waiting', teamNumber: 2, teamName: 'Team 2', isCurrentVote: false },
            { id: 5, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false }
        ]
    }, {
        value: 5,
        label: 'All Random',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: true },
            { id: 2, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false },
            { id: 3, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false },
            { id: 4, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false },
            { id: 5, type: 'random', status: 'waiting', teamNumber: 0, teamName: 'Server', isCurrentVote: false }
        ]
    }, {
        value: 6,
        label: 'Pick / Ban / Pick / Ban / Pick / Pick / Random',
        isSelected: false,
        requiredVotes: [
            { id: 1, type: 'pick', status: 'waiting', teamName: 'Team 1', isCurrentVote: true },
            { id: 2, type: 'ban', status: 'waiting', teamName: 'Team 2', isCurrentVote: false },
            { id: 3, type: 'pick', status: 'waiting', teamName: 'Team 1', isCurrentVote: false },
            { id: 4, type: 'ban', status: 'waiting', teamName: 'Team 2', isCurrentVote: false },
            { id: 5, type: 'pick', status: 'waiting', teamName: 'Team 1', isCurrentVote: false },
            { id: 6, type: 'pick', status: 'waiting', teamName: 'Team 2', isCurrentVote: false },
            { id: 7, type: 'random', status: 'waiting', teamName: 'Server', isCurrentVote: false }
        ]
    }]
}];

export default BO;
