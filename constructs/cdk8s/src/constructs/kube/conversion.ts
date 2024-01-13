import { Duration } from "cdk8s";

export function DurationToString(duration: Duration): string {
  const totalSeconds = Math.floor(duration.toSeconds());
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const totalYears = Math.floor(totalDays / 365);

  if (totalYears > 0) {
    return `${totalYears}y`;
  } else if (totalDays > 0) {
    return `${totalDays}d`;
  } else if (totalHours > 0) {
    return `${totalHours}h`;
  } else if (totalMinutes > 0) {
    return `${totalMinutes}m`;
  } else {
    return `${totalSeconds}s`;
  }
}
