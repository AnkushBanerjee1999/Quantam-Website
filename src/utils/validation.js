const validateCampaign = (data) => {
    const errors = {};
    
    if (!data.title) errors.title = 'Title is required';
    if (!data.description) errors.description = 'Description is required';
    if (!data.fundingGoal || data.fundingGoal <= 0) errors.fundingGoal = 'Valid funding goal is required';
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

module.exports = {
    validateCampaign
};