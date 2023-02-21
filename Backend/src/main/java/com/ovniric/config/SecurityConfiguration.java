package com.ovniric.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    //Http security: permite configurar la seguridad
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf()//solicitudes necesitan enviar un token csrf
                .disable()//desabilito la proteccion csrf
                .authorizeHttpRequests()//reglas de autorización
<<<<<<< HEAD
                .requestMatchers("/api/v1/auth/**", "/api/**")//todas las solicitudes que empiezan con este endpoint no necesitan ser autenticadas
=======
                .requestMatchers("/api/v1/auth/**", "/api/productos/**")//todas las solicitudes que empiezan con este endpoint no necesitan ser autenticadas
>>>>>>> 4e0c1433f9e226a23719db79d692492ae87cd57f
                .permitAll()//todas las permitidas
                .anyRequest() //request que necesitan ser autenticadas
                .authenticated()//indica que necesitan ser autenticadas
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)//no se crearán ni utilizarán sesiones http
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
