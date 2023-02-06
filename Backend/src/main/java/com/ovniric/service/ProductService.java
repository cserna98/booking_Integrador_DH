package com.ovniric.service;

import com.ovniric.model.Product;
import com.ovniric.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product createProduct(Product product){
        return productRepository.save(product);
    }

    public List<Product> searchAllProducts(){
        return productRepository.findAll();
    }

    public Optional<Product> searchProduct(Long id) {
        return productRepository.findById(id);
    }


    public Optional<Product> searchProductByName(String title) {
        return productRepository.findByTitle(title);
    }

    public void updateProduct(Product product) {
        productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        Optional<Product> productToDelete = searchProduct(id);
        if (productToDelete.isPresent()) {
            productRepository.deleteById(id);
        }
    }
}
