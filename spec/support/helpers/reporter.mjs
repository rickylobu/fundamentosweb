import { SpecReporter } from 'jasmine-spec-reporter';

// Configuración de SpecReporter para resultados en consola
jasmine.getEnv().clearReporters(); // Limpia los reportes predeterminados
jasmine.getEnv().addReporter(new SpecReporter({
	spec: {
	displayStacktrace: "pretty"
	}
}));
