import LoginForm from '../components/LoginForm';
import { useTheme } from '../contexts/ThemeContext';
export const Home = () => {
    const { theme } = useTheme();
    return (
        <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white h-full'}>
            <h1 className="!text-[25px] p-4">Welcome to the Home</h1>
            <button className="font-sans bg-secondary text-white p-4 ml-4">Primary Button</button>
            <LoginForm />
        </div>
    )
}