import { useAuth0 } from '@auth0/auth0-react';
import { useUserStats } from '@/services/users';
import { DashboardCards } from '../../componentes/cards';
import { DashboardChart } from '../../componentes/chart';

export default function DashboardScreen() {
  const { user } = useAuth0();
  // TODO: remove id hardcoded
  const { data: userStats, isFetching: isFetchingUserStats } = useUserStats('0779f19c-34a8-40c2-a482-54a353a507c0');

  return (
    <section className="container flex flex-col gap-6">
      <div className="mt-4">
        <h1 className="mb-1 text-xl font-bold">Welcome back, {user?.name} !</h1>
        <p>Track your environmental impact and contributions here.</p>
      </div>

      <DashboardCards data={userStats} isFetching={isFetchingUserStats} />

      <DashboardChart data={userStats} isFetching={isFetchingUserStats} />
    </section>
  );
}
