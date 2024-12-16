import Proptypes from 'prop-types';

const ColorChoice = ({ sender, setColorCallBack }) => {
	const colors = ['red', 'orange', 'yellow', 'green', 'blue'];

	return (
		<div>
			<div>
				<span className='sender-color'>{`${sender}'s color:`}</span>
				<div className='color-dot-container'>
					{colors.map((color) => (
						<span
							key={color}
							className={`color-dot ${color}`}
							onClick={() => setColorCallBack(sender, color)}
						></span>
					))}
				</div>
			</div>
		</div>
	);
};

ColorChoice.propTypes = {
	sender: Proptypes.string.isRequired,
	setColorCallBack: Proptypes.func.isRequired,
};

export default ColorChoice;