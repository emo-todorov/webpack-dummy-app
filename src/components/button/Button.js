import './button.scss'

const Button = () => {
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = 'click'
    
    return button;
};

export default Button;