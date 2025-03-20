
export const createOperator = async (req, res) => {
    try {
        const { name } = req.body

        const newOperator = await createNewOperator(name);

        res.status(200).json({ message: "Operator create with success", operator: newOperator })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getOperators = async (req, res) => {
    try {
        const operators = await fetchOperators();
        res.status(200).json(operators)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getOperator = async (req, res) => {
    try {
        const operators = await fetchOperator();
        res.status(200).json(operators)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

