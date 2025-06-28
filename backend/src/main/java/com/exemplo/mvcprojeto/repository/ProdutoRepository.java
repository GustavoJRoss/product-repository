package com.exemplo.mvcprojeto.repository;

import com.exemplo.mvcprojeto.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}