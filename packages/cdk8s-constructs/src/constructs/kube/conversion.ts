import { Duration, Size } from "cdk8s";

export function SizeToString(size: Size): string {
  const totalGibibytes = Math.floor(size.toGibibytes());
  const totalTebibytes = Math.floor(totalGibibytes / 1024);
  const totalPebibytes = Math.floor(totalTebibytes / 1024);
  const totalExbibytes = Math.floor(totalPebibytes / 1024);

  if (totalExbibytes > 0) {
    return `${totalExbibytes}Ei`;
  } else if (totalPebibytes > 0) {
    return `${totalPebibytes}Pi`;
  } else if (totalTebibytes > 0) {
    return `${totalTebibytes}Ti`;
  } else {
    return `${totalGibibytes}Gi`;
  }
}

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
