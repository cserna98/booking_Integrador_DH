package com.ovniric.repository;


import com.ovniric.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findByTitle(String title);
//    List<Product> findProductsByCategory(String category);
//
//    List<Product> findProductsByLocation(String location);


}
