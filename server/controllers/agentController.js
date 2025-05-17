// server/controllers/agentController.js
module.exports.addAgent = async (req, res) => {
  // Your logic for adding an agent
  try {
    // Example logic
    const agent = new Agent(req.body);
    await agent.save();
    res.status(201).json(agent);
  } catch (error) {
    res.status(500).json({ message: "Error adding agent", error });
  }
};
