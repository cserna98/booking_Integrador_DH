package com.ovniric.service;


import com.ovniric.dto.ProductDTO;
import com.ovniric.model.Feature;
import com.ovniric.model.Images;
import com.ovniric.model.Location;
import com.ovniric.model.Product;
import com.ovniric.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductApplication {

    private ProductRepository productrepository;

    @Autowired
    public ProductApplication(ProductRepository productRepository){this.productrepository=productRepository;}


    public List<ProductDTO> listProducts(){

    }

    private ProductDTO produtcToproductDTO(Product product){

        ProductDTO response = new ProductDTO();
        response.setId(product.getId());
        response.setName(product.getName());
        response.setDescription(product.getDescription());
        response.setFeatureId(product.getFeature().stream().map(Feature::getId).collect(Collectors.toList()));
        response.setImgId(product.getImages().stream().map(Images::getId).collect(Collectors.toList()));
        response.setCategoryId(product.getCategory().getId());

        return response;
    }

    private Product productDTOToProduct (ProductDTO productDTO){
        Product response = new Product();
        List<Feature> feature;
        Location location = new Location();

    }



}
