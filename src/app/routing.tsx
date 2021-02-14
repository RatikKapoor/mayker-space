export const unAuthedRoutes = ['/landing', '/login', '/register'];

export default function redirectAfterAuthEvent(target: string): void {
    // if (target == '/login') {
    //     !unAuthedRoutes.includes(window.location.pathname)
    //         ? (location.href = target)
    //         : console.log('Already at target');
    // } else {
    //     unAuthedRoutes.includes(window.location.pathname) ? (location.href = target) : console.log('Already at target');
    // }
}
