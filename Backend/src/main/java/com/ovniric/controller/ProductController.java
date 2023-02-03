package com.ovniric.controller;
import com.ovniric.model.Product;
import com.ovniric.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/productos")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        return ResponseEntity.ok(productService.createProduct(product));
    }

    @GetMapping
    public ResponseEntity<List<Product>> searchAllProducts(){
        return ResponseEntity.ok(productService.searchAllProducts());
    }

    @GetMapping("id/{id}")
    public ResponseEntity<Product> searchProductById(@PathVariable Long id) {
        Optional<Product> productToSearch = productService.searchProduct(id);
        if(productToSearch.isPresent()) {
            return ResponseEntity.ok(productToSearch.get());
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/nombre/{name}")
    public ResponseEntity<Product> searchProductById(@PathVariable String name) {
        Optional<Product> productToSearch = productService.searchProductByName(name);
        if(productToSearch.isPresent()) {
            return ResponseEntity.ok(productToSearch.get());
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    public ResponseEntity<String> updateProduct(@RequestBody Product product){
        Optional<Product> productToUpdate = productService.searchProduct(product.getIdProduct());
        if(productToUpdate.isPresent()) {
            productService.updateProduct(product);
            return ResponseEntity.ok("The product has been updated");
        }else {
            return ResponseEntity.badRequest().body("The product has not been updated because it is not in " +
                    "the list of products");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        Optional<Product> productToDelete = productService.searchProduct(id);
        if(productToDelete.isPresent()) {
            productService.deleteProduct(id);
            return ResponseEntity.ok("The product has been deleted");
        }else {
            return ResponseEntity.badRequest().body("The product does not exist in the database");
        }
    }
}
