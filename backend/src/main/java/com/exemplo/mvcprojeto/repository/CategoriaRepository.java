package com.exemplo.mvcprojeto.repository;

import com.exemplo.mvcprojeto.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
}