interface AlertBoxProps {
    message: string;
}

export default function AlertBox({ message, toggleAlert }: { message: string; toggleAlert: boolean;}): React.JSX.Element {
    return (
        
        <div className={`alert bg-red-600 absolute` }>
            <p>{message}</p>
        </div>
    );
}
