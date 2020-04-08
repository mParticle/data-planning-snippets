export class Utils {
	public stringForValue(value: any): string {
            if (value as string) {
                return `"${value}"`;
            } else if (value as number) {
                return value;
            } else if (value as boolean) {
                return value ? 'true' : 'false';
            } else {
                return 'nil';
            }
    }

    public capitalize(value: string): string {
        if (value.length > 1) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            return value.toUpperCase();
        }
    }

    public camelCase(value: string): string {
        if (value.length > 1) {
            return value.charAt(0).toLowerCase() + value.slice(1);
        } else {
            return value.toLowerCase();
        }
    }
}