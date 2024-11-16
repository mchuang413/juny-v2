import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Looks like you're lost at sea!</p>
            <Link href="/">🌊 Return to the Shore (Homepage)</Link>
        </div>
    );
}
