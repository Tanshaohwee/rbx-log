export interface LogEvent {
	readonly Level: LogLevel;
	readonly Timestamp: string;
	readonly Template: string;
	[name: string]: defined;
}
export enum LogLevel {
	Verbose,
	Debugging,
	Information,
	Warning,
	Error,
	Fatal,
}
export interface LogEventSinkCallback {
	(message: Readonly<LogEvent>): void;
}

export interface LogEventEnricherCallback {
	(message: LogEvent, properties: Map<string, defined>): void;
}

export interface ILogEventEnricher {
	Enrich(message: Readonly<LogEvent>, properties: Map<string, defined>): void;
}

export interface ILogEventSink {
	Emit(message: LogEvent): void;
}
