const List = require('../models/ListItem');
const Agent = require('../models/Agent');

const getListsByAgent = async (req, res) => {
  try {
    // Find all agents
    const agents = await Agent.find();

    // For each agent, find lists assigned to them
    const results = await Promise.all(
      agents.map(async (agent) => {
        const lists = await List.find({ assignedTo: agent._id }).select('firstName -_id');

        return {
          agentId: agent._id,
          agentName: agent.name,
          lists: lists.map((l) => l.firstName), // list of firstNames
        };
      })
    );

    return res.json(results);
  } catch (err) {
    console.error('Error fetching lists by agent:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getListsByAgent };
