import React, { useState } from "react";

interface FaqItemProps {
	question: string;
	answer: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="border rounded p-3 mb-3 shadow-sm">
			<div
				className="d-flex justify-content-between align-items-center cursor-pointer"
				onClick={() => setOpen(!open)}
				style={{ cursor: "pointer" }}
			>
				<h5 className="mb-0 text-custom-green">{question}</h5>
				<span>{open ? "−" : "+"}</span>
			</div>
			{open && <div className="mt-3">{answer}</div>}
		</div>
	);
};

export default FaqItem;
