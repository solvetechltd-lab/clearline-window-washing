const requestLog: Map<string, number[]> = new Map();

export function checkRateLimit(ip: string, maxRequests: number = 5, windowMs: number = 600000): boolean {
  const now = Date.now();
  const key = ip || 'unknown';

  if (!requestLog.has(key)) {
    requestLog.set(key, []);
  }

  const timestamps = requestLog.get(key)!;
  const recentRequests = timestamps.filter(ts => now - ts < windowMs);

  if (recentRequests.length >= maxRequests) {
    return false;
  }

  recentRequests.push(now);
  requestLog.set(key, recentRequests);

  // Cleanup old entries periodically
  if (requestLog.size > 1000) {
    for (const [ip, times] of requestLog.entries()) {
      const recent = times.filter(ts => now - ts < windowMs);
      if (recent.length === 0) {
        requestLog.delete(ip);
      } else {
        requestLog.set(ip, recent);
      }
    }
  }

  return true;
}
