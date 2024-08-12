const apiURL = "34.46.198.193";

export const fetchMessages = async () => {
	const response = await fetch(`http://${apiURL}/messages`);

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	return response.json();
};

export const sendMessage = async (message) => {
	const response = await fetch(`http://${apiURL}/publish`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ message }),
	});

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	return response.json();
};
