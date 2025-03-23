import { ObjectId } from 'mongodb';

export interface UserActivity {
  _id?: ObjectId;
  userId: ObjectId;
  action: 'login' | 'logout' | 'page_view' | 'project_create' | 'project_update' | 'rendering_request' | 'other';
  timestamp: Date;
  details?: {
    page?: string;
    projectId?: ObjectId;
    ip?: string;
    userAgent?: string;
    duration?: number;
  };
  metadata?: Record<string, any>;
}

export interface SystemMetric {
  _id?: ObjectId;
  type: 'performance' | 'error' | 'usage';
  timestamp: Date;
  value: number;
  unit: string;
  context?: {
    component?: string;
    endpoint?: string;
    errorType?: string;
    errorMessage?: string;
  };
  metadata?: Record<string, any>;
}

export interface AggregateStats {
  _id?: ObjectId;
  type: 'daily' | 'weekly' | 'monthly';
  date: Date;
  metrics: {
    activeUsers: number;
    newUsers: number;
    projectsCreated: number;
    projectsCompleted: number;
    averageSessionDuration: number;
    totalPageViews: number;
    conversionRate?: number;
  };
  topPages?: {
    path: string;
    views: number;
  }[];
  metadata?: Record<string, any>;
}

export const USER_ACTIVITY_COLLECTION = 'user_activities';
export const SYSTEM_METRIC_COLLECTION = 'system_metrics';
export const AGGREGATE_STATS_COLLECTION = 'aggregate_stats';

// Helper functions for analytics object creation
export function createUserActivityObject(data: Partial<UserActivity>): Omit<UserActivity, '_id'> {
  return {
    userId: data.userId!,
    action: data.action || 'other',
    timestamp: data.timestamp || new Date(),
    details: data.details,
    metadata: data.metadata
  };
}

export function createSystemMetricObject(data: Partial<SystemMetric>): Omit<SystemMetric, '_id'> {
  return {
    type: data.type || 'usage',
    timestamp: data.timestamp || new Date(),
    value: data.value || 0,
    unit: data.unit || '',
    context: data.context,
    metadata: data.metadata
  };
}

export function createAggregateStatsObject(data: Partial<AggregateStats>): Omit<AggregateStats, '_id'> {
  return {
    type: data.type || 'daily',
    date: data.date || new Date(),
    metrics: data.metrics || {
      activeUsers: 0,
      newUsers: 0,
      projectsCreated: 0,
      projectsCompleted: 0,
      averageSessionDuration: 0,
      totalPageViews: 0
    },
    topPages: data.topPages || [],
    metadata: data.metadata
  };
} 